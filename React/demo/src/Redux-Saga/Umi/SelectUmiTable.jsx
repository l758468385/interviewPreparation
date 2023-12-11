import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Table, Alert, Space } from "antd";
import queryString from "query-string";

import TableEllipsisCell from "./table-ellipsis-cell";

function BaseTable(
  {
    fetchDataHandle,
    url,
    method = "GET",
    dataSource: dataSourceProps,
    allowChecked,
    onCheckedChange,
    selectedRows,
    ...rest
  },
  ref
) {
  const [dataSource, setDataSource] = useState(dataSourceProps);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [searchParams, setSearchParams] = useState({});

  // 存放id和数据之间的映射关系，可以通过id快速获取到当前行数据。 ex: {1: {id: 1, name: '2}}
  const dataMap = useRef({});

  // 当前选中的行改变
  const onSelectChange = (selectedRowKeys) => {
    if (onCheckedChange) {
      // 通过id把当前行信息暴露出去
      onCheckedChange(
        selectedRowKeys.map((key) => dataMap.current[key]).filter((o) => o)
      );
    }
  };

  const [rowSelection, setRowSelection] = useState(() => ({
    selectedRowKeys: [],
    onChange: onSelectChange,
    columnWidth: 40,
    preserveSelectedRowKeys: true,
    fixed: true,
  }));

  // 对外暴露搜索方法
  useImperativeHandle(
    ref,
    () => {
      return {
        search: async (params) => {
          setPagination((prev) => ({
            ...prev,
            current: 1,
          }));

          setSearchParams(params);
        },
      };
    },
    []
  );

  // 获取数据，这里支持两种获取数据方式，一个是注入请求方法，还有一个是通过url和请求方式在组件内部去请求数据。
  const getData = async (pagination, searchParams) => {
    let requestMethod = fetchDataHandle;

    if (!requestMethod && url) {
      requestMethod = async (params) => {
        return await window
          .fetch(
            [url, queryString.stringify(params)].join(
              url.includes("?") ? "&" : "?"
            ),
            {
              method,
            }
          )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
      };
    }

    if (requestMethod && dataSourceProps === undefined) {
      setLoading(true);
      const { list, total } = await requestMethod({
        pageSize: pagination.pageSize,
        page: pagination.current,
        ...searchParams,
      })
        .then((data) => data)
        .catch(() => null);

      if (list) {
        setDataSource(list);
        setLoading(false);
        setPagination({
          ...pagination,
          total,
        });
      }
    } else if (dataSourceProps) {
      setLoading(false);
    }
  };

  // 当分页信息或搜索参数发生变化时，设置分页信息
  const tableChange = (pagination) => {
    setPagination(pagination);
  };

  // 当选中的行发生变化时，设置选中的行
  useEffect(() => {
    if (allowChecked) {
      setRowSelection((prev) => ({
        ...prev,
        selectedRowKeys: (selectedRows || []).map(
          (o) => o[rest.rowKey || "id"]
        ),
      }));
    }
  }, [selectedRows]);

  useEffect(() => {
    // 当分页信息或搜索参数发生变化时，重新获取数据
    getData(pagination, searchParams);
  }, [pagination.current, pagination.pageSize, searchParams]);

  // 当数据源发生变化时，更新数据映射
  useEffect(() => {
    dataMap.current = {
      ...dataMap.current,
      ...(dataSource || []).reduce((prev, cur) => {
        prev[cur[rest.rowKey]] = cur;
        return prev;
      }, {}),
    };
  }, [dataSource]);

  // 自定义单元格，当文本超出宽度时，显示省略号，并且显示tooltip
  const columns = useMemo(() => {
    return (rest.columns || []).map((item) => {
      if (!item.ellipsis) return item;

      return {
        ...item,
        render: (text, record, index) => (
          <TableEllipsisCell
            value={item.render ? item.render(text, record, index) : text}
          />
        ),
      };
    });
  }, [rest.columns]);

  return (
    <Space direction="vertical">
      {allowChecked && (
        <Alert
          message={`已选择 ${rowSelection.selectedRowKeys.length} 项，共 ${
            pagination?.total || 0
          } 项`}
          action={
            !!rowSelection.selectedRowKeys.length && (
              <a
                onClick={() => {
                  onSelectChange([]);
                }}
              >
                取消选择
              </a>
            )
          }
        />
      )}
      <Table


        {...rest}
        columns={columns}
        rowSelection={allowChecked && rowSelection}
        dataSource={dataSource}
        loading={loading}
        pagination={pagination}
        onChange={tableChange}
      />
    </Space>
  );
}

export default forwardRef(BaseTable);

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} />;
});

const App = () => {
  const inputRef = useRef();
  const handleClick = useCallback(() => inputRef.current.focus(), [inputRef]);
  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={handleClick}>获取焦点</button>
    </>
  );
};
