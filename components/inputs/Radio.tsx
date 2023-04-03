import {FormType} from '@/types/form'
import {useContext, useMemo, useState} from 'react'
import {myFormContext} from "@/context/form";
export default function Radio(props: Omit<FormType, "placeholder" | "type">) {

    /**
    * @param t K extends keyof FormType
    * @param v V extends FormType[K]
    */
    const create = <K extends keyof FormType, V extends FormType[K]>(t: K, v: V) => {}

    const gridCols = useMemo(() => {
    const len: number  = props.selections.length
    let grid: string   = `grid-cols-${len}`
    if(len === 4) {
      grid = 'grid-cols-2'
    }
    if (len > 4){
      grid = 'grid-cols-3'
    }
    return grid
    }, [props.selections])

    const forms = useContext(myFormContext)

    let [userSelected, setUserSelected] = useState<string[]>([])

    const upsert = (value: string) => {
        let result= [value]
        if (props.isMultiple){
            // 既に配列に含まれていたら取り除く
            if(userSelected.includes(value)){
                result = userSelected.filter((select: string) => select !== value)
                setUserSelected(result)
            } else {
                // 含まれていないなら追加
                result = [ ...userSelected, value ]
                setUserSelected(result)
            }
        } else {
            setUserSelected(result)
        }

        forms.setIsForm({ ...forms.form, [props.property]: result.join(',') })
    }

    return (
        <div>
            <label htmlFor="">{props.label}</label>
            <div className={`grid ${gridCols} gap-2`}>
                {props.selections.map((select, idx) => (
                    <div
                        onClick={() => upsert(select)}
                        className={userSelected.includes(select) ? 'text-white bg-pink-500 border-pink-600 w-full px-3 py-2' : 'w-full px-3 py-2 hover:text-white border-2 border-green-800 hover:bg-gray-400 hover:border-gray-500'}
                        key={idx}
                    >
                        <div>{select}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
