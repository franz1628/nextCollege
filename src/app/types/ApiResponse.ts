export interface ApiResponse<T> {
    state:number
    message:string
    error:string []
    data : T
    timeStamp:Date
}