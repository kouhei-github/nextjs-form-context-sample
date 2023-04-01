import {FormType} from '@/types/form'
import {useMemo} from 'react'
export default function Radio(props: Omit<FormType, "placeholder" | "type" | "property">) {

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


  return (
      <div>
        <label htmlFor="">{props.label}</label>
        <div className={`grid ${gridCols} gap-2`}>
          {props.selections.map((select, idx) => (
            <div className={"border-2 border-green-800 w-full px-3 py-2 hover:text-white hover:bg-pink-500 hover:border-pink-600"} key={idx}>
              <div>{select}</div>
            </div>
          ))}
        </div>
      </div>
  )
}
