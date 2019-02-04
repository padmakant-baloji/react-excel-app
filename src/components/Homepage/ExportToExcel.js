import React from 'react';
import Button from '@material-ui/core/Button';

import {
    ExcelExport,
    ExcelExportColumn,
} from '@progress/kendo-react-excel-export';

export default class ExportToExcel extends React.Component {
    _exporter;
    export = () => {
        this._exporter.save();
    }
    render() {
        return (
            <div>

                <Button variant="contained" color="primary" onClick={this.export}>
                    Export to excel
                </Button>

                <ExcelExport
                    data={this.props.xl}
                    fileName={"company" + Math.floor((Math.random() * 10) + 1) + ".xlsx"}
                    ref={(exporter) => { this._exporter = exporter; }}
                >
                    <ExcelExportColumn field="name" title="Copany name" width={200} />
                    <ExcelExportColumn field="address" title="Address" width={350} />
                    <ExcelExportColumn field="department" title="Department" width={350} />
                </ExcelExport>
            </div>
        );
    }
}