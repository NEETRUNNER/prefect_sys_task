import { Children, Dispatch, ReactElement, ReactNode, SetStateAction, useEffect, useRef, useState } from "react"

interface OptionProps<T> {
  value: T;
  children: string;
}

interface SelectProps<T extends string | number> { //  Типизация пропсов нашего кастомного компонента Select
  children: ReactElement<OptionProps<T>> | ReactElement<OptionProps<T>>[];
  setCurrValue: Dispatch<SetStateAction<T>>;
  outputName: ReactNode;
}

export default function Select<T extends string | number>({children, setCurrValue, outputName}: SelectProps<T>) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const menu = useRef<HTMLDivElement | null>(null)
  const select = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => { // Тригер для отслеживания кликов мыши(для похожего эффекта как у селекта)
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
      value: child.props.value,
      label: child.props.children
    }
  })

  return (
    <div ref={select} onClick={() => setToggleMenu(!toggleMenu)} className="select-menu">
      <p>{outputName}</p>
      <div className={`${toggleMenu ? "open" : "close"}`}>
        <div ref={menu} className="menu-list">
          {options.map((option, index) => (
            <div
            key={index} 
            className="select-option__item"
            onClick={() => {
              setCurrValue(option.value); setToggleMenu(!toggleMenu)
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
Select.Option = function Option<T>({ children, value }: OptionProps<T>) {
  console.log(children, value)
  return null;
};