const API_BASE_URL = process.env.CONSUMET_API_BASE_URL;

async function FetchApi(
    {
        endpoint, 
        method = GET,
        body = null,
        next= {
            revalidate: 0,
        }
    }) {
        const URL = `${API_BASE_URL}/${endpoint}`;
        const options = {
            method, 
            headers: {
                'Content-Type': 'application/json'
            },
            next,
        };

        if (body) {
            options.body = JSON.stringify(body)
        }

        try{
            const response = await fetch(URL, options)
            const statusCode = response.status
            const isSuccess = response.ok
            const data = isSuccess ? await response.json() : null;
            const error = isSuccess ? null : response.statusText

            return{
                isSuccess,
                data,
                isError: !isSuccess,
                error,
                statusCode
            };

        } catch (error) {
            if(error instanceof Error){
                return { 
                    isSuccess: false,
                    isError: true,
                    data: null,
                    error: error.message,
                    statusCode: null,
                };
            }
            return {
                isSuccess: false,
                isError: true,
                data: null,
                error: "An unknown error occurred",
                statusCode: null,
              };
            }
          }
          

export default FetchApi