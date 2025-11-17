import { useState } from "react"
import Select from "../src/components/Select"
import "./css/app.css"

export default function App(){
    const [currency, setCurrency] = useState<string>("UAH");
    const [language, setLanguage] = useState<string>("EN");
    const [level, setLevel] = useState<number>(1);
    const [rating, setRating] = useState<number>(5);
    const [category, setCategory] = useState<string>("A");


    return (
        <div className="container">
            <div className="select-wrap">
                <h1 className="select-title">Currency: {currency}</h1>
                <Select outputName={currency} setCurrValue={setCurrency}>
                    <Select.Option value="EUR">EUR</Select.Option>
                    <Select.Option value="USD">USD</Select.Option>
                    <Select.Option value="UAH">UAH</Select.Option>
                </Select>

                <h2 className="select-title">Language: {language}</h2>
                <Select outputName={language} setCurrValue={setLanguage}>
                    <Select.Option value="EN">English</Select.Option>
                    <Select.Option value="FR">French</Select.Option>
                    <Select.Option value="ES">Spanish</Select.Option>
                </Select>

                <h3 className="select-title">Level: {level}</h3>
                <Select outputName={level} setCurrValue={setLevel}>
                    <Select.Option value={1}>Beginner</Select.Option>
                    <Select.Option value={2}>Intermediate</Select.Option>
                    <Select.Option value={3}>Advanced</Select.Option>
                </Select>

                <h4 className="select-title">Rating: {rating}</h4>
                <Select outputName={rating} setCurrValue={setRating}>
                    <Select.Option value={1}>1 Star</Select.Option>
                    <Select.Option value={5}>5 Stars</Select.Option>
                    <Select.Option value={10}>10 Stars</Select.Option>
                </Select>

                <h5 className="select-title">Category: {category}</h5>
                <Select outputName={category} setCurrValue={setCategory}>
                    <Select.Option value="A">Category A</Select.Option>
                    <Select.Option value="B">Category B</Select.Option>
                    <Select.Option value="C">Category C</Select.Option>
                </Select>
            </div>
        </div>
    )
}