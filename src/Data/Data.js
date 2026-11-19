export let users = [
    { email: 'fatimaelmussawi936@gmail.com', password: 'Fatima' }
];
export function checkUser(email , password){
 for(var i in users){
    if( users[i].email ===email && users[i].password === password )
        return true;
     }
 return false;
}
export function EmailExists(email){
        for(var i in users){
            if(users[i].email===email )
                return true
        }
        return false;
    }