const jsonApiRequest = async (url = "", reqType = null, errorMessage = null) => {
    try{
        const response = await fetch(url,reqType);

        if(!response.ok) {
            throw Error("In-Valid data received...")
        }
    }

    catch (error)
    {
        errorMessage = error.message;
    }

    finally {
       return errorMessage;
    }

}