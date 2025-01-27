const UserDashboard =({userName})=>{
    return <>
        <div className="col-md-8 mt-3">
          <h4 style={{textAlign:"left",fontWeight:"700"}}>Hello {userName}</h4>
          <p style={{textAlign:"left"}}>From your account dashboard. you can easily check & view your recent orders,
          manage your shipping and billing addresses and edit your password and account details.</p>
        </div>
    </>
}
export default UserDashboard;