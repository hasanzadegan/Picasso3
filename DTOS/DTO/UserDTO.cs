using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class UserDTO
    {
        public decimal UserId { get; set; }
        public string DisplayName { get; set; }
        public string email { get; set; }
        public string UserToken { get; set; }
        public string Password { get; set; }

    }
}
