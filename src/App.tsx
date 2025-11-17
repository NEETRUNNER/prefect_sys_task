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
            <div className="appValue">Value: {currency}</div>
            <div className="select-wrap">
                <h2>Currency: {currency}</h2>
                <Select outputName={currency} setCurrValue={setCurrency}>
                    <Select.Option value="EUR">EUR</Select.Option>
                    <Select.Option value="USD">USD</Select.Option>
                    <Select.Option value="UAH">UAH</Select.Option>
                </Select>

                <h2>Language: {language}</h2>
                <Select outputName={language} setCurrValue={setLanguage}>
                    <Select.Option value="EN">English</Select.Option>
                    <Select.Option value="FR">French</Select.Option>
                    <Select.Option value="ES">Spanish</Select.Option>
                </Select>

                <h2>Level: {level}</h2>
                <Select outputName={level} setCurrValue={setLevel}>
                    <Select.Option value={1}>Beginner</Select.Option>
                    <Select.Option value={2}>Intermediate</Select.Option>
                    <Select.Option value={3}>Advanced</Select.Option>
                </Select>

                <h2>Rating: {rating}</h2>
                <Select outputName={rating} setCurrValue={setRating}>
                    <Select.Option value={1}>1 Star</Select.Option>
                    <Select.Option value={5}>5 Stars</Select.Option>
                    <Select.Option value={10}>10 Stars</Select.Option>
                </Select>

                <h2>Category: {category}</h2>
                <Select outputName={category} setCurrValue={setCategory}>
                    <Select.Option value="A">Category A</Select.Option>
                    <Select.Option value="B">Category B</Select.Option>
                    <Select.Option value="C">Category C</Select.Option>
                </Select>
            </div>
        </div>
    )
}