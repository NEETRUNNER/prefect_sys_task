import { Children, Dispatch, ReactElement, ReactNode, SetStateAction, useEffect, useRef, useState } from "react"

interface OptionProps {
  children: string;
}

interface SelectProps {
  children: ReactElement<OptionProps> | ReactElement<OptionProps>[];
  setCurrValue: Dispatch<SetStateAction<"EUR" | "USD" | "UAH" | "PLN">>;
  data: "EUR" | "USD" | "UAH" | "PLN"
}

export default function Select({children, setCurrValue, data}: SelectProps) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const menu = useRef<HTMLInputElement | null>(null)
  const select = useRef<HTMLInputElement | null>(null)

  useEffect(() => { // Тригер для отслеживания кликов мыши
    function handleClickOutside(event: MouseEvent) {
      if (menu.current && select.current && select.current?.contains(event.target as Node) && !menu.current.contains(event.target as Node)) {
        setToggleMenu(true)
      } else {
        setToggleMenu(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const options = Children.map(children, child => { // Получаем елементы сущности Children, то-есть детей внутри этого компонента, пользовался нейронкой, так как даже не знал о таком в реакте, не приходилось распаковывать children чтобы взять по елементу из него, обычно просто прокидывал в компонент что-то

    return {
      label: child.props.children
    }
  })

  return (
    <div ref={select} onClick={() => setToggleMenu(!toggleMenu)} className="select-menu">
      <p className="">{data}</p>
      <div className={`${toggleMenu ? "open" : "close"}`}>
        <div ref={menu} className="menu-list">
          {options.map((option, index) => (
            <div
            key={index} 
            className="select-option__item"
            onClick={() => {
              setCurrValue(option.label as "EUR" | "USD" | "UAH" | "PLN"); setToggleMenu(toggleMenu)
            }}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Подкомпонент Option, по сути это те же children просто с приставкой Option
Select.Option = function Option({ children, value }: { children: ReactNode, value?: string }) {
  console.log(children, value)
  return null;
};