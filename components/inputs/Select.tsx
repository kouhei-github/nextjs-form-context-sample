import {FormType} from '@/types/form'
export default function Select(props: Omit<FormType, "placeholder" | "type" | "property">) {

  /**
   * @param t K extends keyof FormType
   * @param v V extends FormType[K]
   */
  const create = <K extends keyof FormType, V extends FormType[K]>(t: K, v: V) => {}

  return (
      <div>
        <label htmlFor="">{props.label}</label>
        <select className={"border-2 border-green-800 w-full focus:ring focus:ring-green-500"}>
          {props.selections.map((select) => (
              <option key={select} value={select}>{select}</option>
          ))}
        </select>
      </div>
  )
}
