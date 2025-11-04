import commonAPI from "./commonAPI";
import ServerURL from "./ServerURL";

//resume addd api - called by userInputs, when finish btn clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`, "POST", resume)
}

