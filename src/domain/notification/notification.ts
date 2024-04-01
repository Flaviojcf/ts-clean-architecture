export type NotificationError = {
    message: string;
    context: string;
}

export default class Notification {
    private errors: NotificationError[] = [];

    public addError(error: NotificationError) {
        this.errors.push(error);
    }

    public messages(context?: string):string {
        let message = "";

        this.errors.forEach((error)=>{
            if(context === undefined || context === context){
                message += `${error.context}: ${error.message},`
            }
        })

        return message;
    }
}