using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Picasso2.DTO
{
    public class WebDefinerDTO
    {
        public decimal WebDefinerId { get; set; }
        public string Title { get; set; }
        public string JS { get; set; }
        public string CSS { get; set; }
        public string InjectorList { get; set; }
        public string VariableList { get; set; }
        public string ParamList { get; set; }
        public string FunctionList { get; set; }
        public string Directive { get; set; }


    }
}
