import React from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

function Emaillist() {

    const [emailList, setemailList] = React.useState([]);
    const [isLogin, setisLogin] = React.useState(false);
    const [password, setpassword] = React.useState('');

    const db = getDatabase();

    React.useEffect(() => {
        const emails = ref(db, `emailList/`);
        onValue(emails, (snapshot) => {
            if(snapshot.val()){
                setemailList(snapshot.val());
            }
        });
    },[]);

    function submit(){
        if(password == '12354'){
            setisLogin(true);
        } else {
            alert('Wrong Password')
        }
    }

    if(isLogin){
        return (
            <div className='w-full h-auto overflow-x-hidden lg:p-10 p-8'>
                <div className='lg:w-4/5 w-full mx-auto'>
                    <p className='uppercase md:text-4xl text-2xl font-semibold tracking-widest text-center mb-8'>Subscribers</p>
                    <table class="ui celled table">
                        <thead>
                            <tr>
                            <th>S.No</th>
                            <th>Emails</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emailList.length > 0 ?
                                emailList.map((user, index) => {
                                    return (
                                        <tr>
                                            <td>{index +1}</td>
                                            <td>{user}</td>
                                        </tr> 
                                    )
                                }) :
                                <p>No emails yet!</p>       
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    } else {
        return (
            <div className='w-full h-screen bg-white flex items-center justify-center'>
                <div>
                    <input value={password} onChange={(event)=>setpassword(event.target.value)} className='bg-gray-200 p-2 border-none rounded-l-md focus:outline-none' type="password" placeholder='Enter password' />
                    <button onClick={()=>submit()} className='bg-pink text-white p-2 rounded-r-md'>Login</button>
                </div>
                

            </div>

        )
    }

  }
  
export default Emaillist;
