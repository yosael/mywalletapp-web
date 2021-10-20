import axiosApi from '../../util/axios';

export const saveUserToDB = async (uid,email)=>{

    try {
        console.log("uid: ",uid);
        console.log("email: ",email);
        await axiosApi.post('/user',{uid:uid,email:email});
        console.log("user was sent to db");
    } catch (error) {
        throw error;
    }

}