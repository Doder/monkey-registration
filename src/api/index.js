export const submitRegistration = (fields) => {
    return new Promise((fulfill, reject) => {
    //success
    setTimeout(function () {
        fulfill(
        {
            "info": {
                success: true
            }
        }
        );
    }, 1000);
    });
}