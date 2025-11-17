import { useState } from "react"
import Select from "../src/components/Select"
import "./css/app.css"

export default function App(){
    const [currencies, setCurrencies] = useState<"EUR" | "USD" | "UAH" | "PLN">("UAH")

    return (
        <div className="container">
            <div className="appValue">Value: {currencies}</div>
            <div className="select-wrap">
                <Select data={currencies} setCurrValue={setCurrencies}>
                    <Select.Option value="EUR">EUR</Select.Option>
                    <Select.Option value="USD">USD</Select.Option>
                    <Select.Option value="UAH">UAH</Select.Option>
                    <Select.Option value="PLN">PLN</Select.Option>
                </Select>
            </div>
        </div>
    )
}