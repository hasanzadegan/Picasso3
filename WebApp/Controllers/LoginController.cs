using Picasso2.BLL.BIZ;
using Picasso2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApp.Controllers
{
    public class LoginController : ApiController
    {
        [Route("api/login/{id?}")]
        public UserDTO login(string email,string password)
        {
            return BLL.BLLogin.Login(email, password);
        }

        [Route("api/logout/{id?}")]
        public string logout(string eMail, string userToken)
        {
            return BLL.BLLogin.Logout(eMail, userToken);
        }
    }
}
