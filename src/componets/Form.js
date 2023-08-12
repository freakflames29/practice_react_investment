const Form=props=>{
    const currentSavingsHandler=e=>{
        props.currentSavingsHandler(e.target.value)
    }
    const yearlySavingsHandler=e=>{
        props.yearlySavingsHandler(e.target.value)
    }
    const expectedInterestHandler=e=>{
        props.expectedInterestHandler(e.target.value)
    }
    const investmentDurationHandler=e=>{
        props.investmentDurationHandler(e.target.value)
    }
const FormSubmitHandler=e=>{
        props.FormSubmitHandler(e)
}

    return(
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={currentSavingsHandler}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={yearlySavingsHandler}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={expectedInterestHandler}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={investmentDurationHandler}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button" onClick={FormSubmitHandler}>
                    Calculate
                </button>
            </p>
        </form>
    )

};
export default Form;