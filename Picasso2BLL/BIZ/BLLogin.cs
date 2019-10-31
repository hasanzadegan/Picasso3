using Picasso2.Entity;
using Picasso2.DTO;

namespace Picasso2.BLL.BIZ
{
    public class BLLogin
    {
        LoginEntity loginEntity = new LoginEntity();
        public UserDTO Login(string email, string password)
        {
            return loginEntity.Login(email, password);
        }

        public string Logout(string email, string userToken)
        {
            return "";
        }
    }
}
