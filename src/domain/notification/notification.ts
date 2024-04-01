export type NotificationErrorProps = {
    message: string;
    context: string;
}

export default class Notification {
    private errors: NotificationErrorProps[] = [];

    public addError(error: NotificationErrorProps) {
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

    public hasErrors() : boolean {
        return this.errors.length > 0;
    }
    
    public getErrors(): NotificationErrorProps[] {
        return this.errors;
    }
}