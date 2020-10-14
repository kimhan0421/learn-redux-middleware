import React from 'react';
import {connect} from 'react-redux';
import Sample from '../components/Sample';
import {getPost, getUsers} from '../modules/sample';

const {useEffect} = React;
const SampleContainer =({
  getPost, getUsers, post, users, loadingPost, loadingUsers
}) => {
  useEffect(()=>{
    // getPost(1);
    // getUsers(1);
    //useEffeact 에 파라미터로 넣는 함수는 async로 할 수 없어 async함수를 선언하고 호출해줌
    const fn = async () => {
      try{
        await getPost(1);
        await getUsers(1);
      }catch (e){
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample post ={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers} />
  )
}

export default connect (({sample, loading}) => ({
  post : sample.post, 
  users: sample.users, 
  loadingPost: loading['sample/GET_POST'],
  loadingUsers: loading['sample/GET_USERS']
}), {getPost, getUsers}) (SampleContainer);