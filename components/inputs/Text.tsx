import {FormType, SendServerData} from '@/types/form'
import { useContext} from 'react'
import {myFormContext} from '@/context/form'



// 引数はこれでも良い Omit<FormType, selections>
export default function Text(props: Pick<FormType, "label" | "placeholder" | "required" | "type" | "property">) {

  /**
   * @param t K extends keyof FormType
   * @param v V extends FormType[K]
   */
  const create = <K extends keyof FormType, V extends FormType[K]>(t: K, v: V) => {}

  // FormContextを受け取る
  const forms = useContext(myFormContext)
  const updateValue = (value: string) => {
    // プロパティを合わせるために動的にした =>  [props.key]: value
    forms.setIsForm( { ...forms.form, [props.property]: value })
  }

  return (
      <div>
        <label htmlFor="">{props.label}</label>
        <input
          type={props.type}
          className={"border-2 border-green-800 w-full focus:ring focus:ring-green-500"}
          placeholder={props.placeholder}
          value={forms.form[props.property]} // プロパティを合わせるために動的にした
          onChange={(event) => updateValue(event.target.value)}
        />
      </div>
  )
}
