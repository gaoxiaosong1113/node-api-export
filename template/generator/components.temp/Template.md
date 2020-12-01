# ScrollTable

## 作用

### 问题
 - 解决table中数据展示太多，导致横向滚动条使用不方便的问题
 
### 解决方案
 - 通过对StandardTable的二次封装，在页面底部增加悬浮滚动条，方便拖拽


## 示例

```
import { ScrollTable } from '@/pages/'

<ScrollTable
    rowKey="key"
    childrenColumnName="childrens"
    defaultExpandAllRows={true}
    expandedRowKeys={expandedRowKeys}
    components={components}
    selectedRows={selectedRows}
    
// loading={loading}

    data={data}
    columns={columns}
    onSelectRow={this.handleSelectRows}
    onChange={this.handleStandardTableChange}
/>
```
