const RowData = props => {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.yearlyInterest}</td>
            <td>{props.savingsEndOfYear}</td>
            <td>{props.yearlyContribution}</td>
            {/*<td>TOTAL INVESTED CAPITAL</td>*/}
        </tr>
    )

};

export default RowData;