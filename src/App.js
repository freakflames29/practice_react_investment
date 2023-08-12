import {useState} from "react";
import RowData from "./componets/RowData";
import Header from "./componets/Header";
import Form from "./componets/Form";

function App() {

    const [currentSavings, setCurrentSavings] = useState("")
    const [yearlySavings, setYearlySavings] = useState("")
    const [ExpectedInterest, setExpectedInterest] = useState("")
    const [InvestmentDuration, setInvestmentDuration] = useState("")
    const [finalData, setFinalData] = useState([])
    const [showTable, setShowTable] = useState(false)

    const currentSavingsHandler = data => {
        setCurrentSavings(data);
    }
    const yearlySavingsHandler = data => {
        setYearlySavings(data);
    }
    const expectedInterestHandler = data => {
        setExpectedInterest(data);
    }

    const investmentDurationHandler = data => {
        setInvestmentDuration(data)
    }

    const FormSubmitHandler = (e) => {
        e.preventDefault();
        const consolidatedData = {
            current_savings: currentSavings,
            yearly_contribution: yearlySavings,
            expected_returns: ExpectedInterest,
            duration: InvestmentDuration
        }
        calculateHandler(consolidatedData)
    }
    const calculateHandler = (userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...

        const yearlyData = []; // per-year results

        let currentSavings = +userInput['current_savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly_contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected_returns'] / 100;
        const duration = +userInput['duration'];

        console.log(currentSavings, " ", yearlyContribution, " ", expectedReturn, " ", duration)


        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }

        // do something with yearlyData ...
        setFinalData(yearlyData)
        setShowTable(true)
    };


    return (<div>
        <Header/>

        <Form
            currentSavingsHandler={currentSavingsHandler}
            yearlySavingsHandler={yearlySavingsHandler}
            expectedInterestHandler={expectedInterestHandler}
            investmentDurationHandler={investmentDurationHandler}
            FormSubmitHandler={FormSubmitHandler}
        />


        {/* Todo: Show below table conditionally (only once result data is available) */}
        {/* Show fallback text if no data is available */}


        {showTable &&
            <table className="result">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                </thead>
                <tbody>

                {finalData.map((data, index) => (
                        <RowData
                            key={index}
                            year={data.year}
                            yearlyInterest={data.yearlyInterest}
                            savingsEndOfYear={data.savingsEndOfYear}
                            yearlyContribution={data.yearlyContribution}
                        />

                    )
                )}
                </tbody>

            </table>
        }
    </div>)
        ;
}

export default App;
