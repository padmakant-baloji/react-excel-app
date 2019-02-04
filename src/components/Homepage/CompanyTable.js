import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import ExportToExcel from './ExportToExcel'




class CompanyTable extends React.Component {
    render() {
        let res = [];

        this.props.data.forEach(element => {

            if (element.name || element.address || element.department) {
                res.push(element)
            }

        });





        return (
            <div>
                {this.props.data.length <= 0 ? (<div></div>) : (


                    <div className="row">
                        <div className="col col-md-12">
                            <div style={{ display: "inline" }}>
                                <span style={{ float: "letf" }}>
                                    <h3 style={{ color: "#3f51b5" }}>Company Details</h3>
                                </span>
                                <span style={{ float: "right" }}>
                                    <ExportToExcel xl={res} />

                                </span>
                            </div>

                            <Paper >
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Company name</TableCell>
                                            <TableCell align="right">Company address</TableCell>
                                            <TableCell align="right">Department</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            res.reverse().map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.address}</TableCell>
                                                    <TableCell align="right">{row.department}</TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </Paper>

                        </div>

                    </div>

                )}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.homepagereducer.data,
});
const mapDispatchToProps = dispatch => ({
    addComponayData: (companyData) => {
        dispatch(addComponayData(companyData));
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(CompanyTable);