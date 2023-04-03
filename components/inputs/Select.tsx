import {FormType} from '@/types/form'
import {useContext} from "react";
import {myFormContext} from "@/context/form";
export default function Select(props: Omit<FormType, "placeholder" | "type" | "isMultiple">) {

    /**
     * @param t K extends keyof FormType
     * @param v V extends FormType[K]
     */
    const create = <K extends keyof FormType, V extends FormType[K]>(t: K, v: V) => {}

    const forms = useContext(myFormContext)

    return (
        <div>
            <label htmlFor="">{props.label}</label>
            <select
                className={"border-2 border-green-800 w-full focus:ring focus:ring-green-500"}
                value={forms.form[props.property]}
                onChange={(event) => forms.setIsForm( { ...forms.form, [props.property]: event.target.value })}
            >
              {props.selections.map((select) => (
                  <option key={select} value={select}>{select}</option>
              ))}
            </select>
        </div>
    )
}
