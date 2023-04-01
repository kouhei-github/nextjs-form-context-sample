/**
 * DynamoDBに通信する
 */
export type SendServerData = {
  name: string
  kana: string
  jobType: string
  gender: string
}


export type FormType = {
  label: string
  placeholder: string
  required: boolean
  type: string
  selections: string[]
  property: keyof SendServerData //SendServerDataタイプのキーを型にする
}
