import UserProfile from '../../components/Setting/UserProfile';
import UserInfo from '../../components/Setting/UserInfo';
import UserContents from '../../components/Setting/UserContents';
import styled from 'styled-components';

const Setting = () => {
  return (
    <SettingPage>
      <section className='setting-top'>
        <UserProfile />
        <UserInfo />
      </section>
      <UserContents />
    </SettingPage>
  );
};

const SettingPage = styled.div`
  width: 768px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5rem;

  .setting-top {
    display: flex;
    height: 13.75rem;
  }
`;

export default Setting;
