import Text from '@/components/inputs/Text'
import Radio from '@/components/inputs/Radio'
import Select from '@/components/inputs/Select'
import {myFormContext, useMyFormContext} from '@/context/form'

export default function Form() {
  const customCtx = useMyFormContext();
  return (
      <div className={"space-y-6"}>
        <div className={"w-2/3 mx-auto"}>
          <myFormContext.Provider value={customCtx} >
            <Text
                label={"お名前"}
                placeholder={"山田太郎"}
                required={true}
                type={"text"}
                property={"name"}
            />
          </myFormContext.Provider>
        </div>

        <div className={"w-2/3 mx-auto"}>
          <myFormContext.Provider value={customCtx} >
            <Text
                label={"かな"}
                placeholder={"やまだたろう"}
                required={true}
                type={"text"}
                property={"kana"}
            />
          </myFormContext.Provider>
        </div>

        <div className={"w-2/3 mx-auto"}>
          <Select label={"雇用形態"} required={false} selections={["正社員", "アルバイト"]} />
        </div>

        <div className={"w-2/3 mx-auto"}>
          <Radio label={"性別"} required={false} selections={["男性", "女性"]} />
        </div>
        <div className={"border-2 hover:bg-black cursor-pointer hover:text-white border-black px-3 py-2 text-center w-1/3 mx-auto"} onClick={() => customCtx.setIsForm({...customCtx.form, name: "Bird"})}>ttt</div>
      </div>
  )
}
