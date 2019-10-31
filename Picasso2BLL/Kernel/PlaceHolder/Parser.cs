using Picasso2.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Picasso2.BLL.Kernel
{
    public static class Parser
    {
        public static List<string> getPlaceHolderList(string stringTokenize,string pattern)
        {
            var matchList = Regex.Matches(stringTokenize, pattern);
            List<string> list = matchList.Cast<Match>().Select(match => match.Value).ToList();
            return list; 
        }
        public static List<string> replacePlaceHolderList(string stringTokenize, Dictionary<string,string> tokenDic, string pattern)
        {
            var matchList = Regex.Matches(stringTokenize, pattern);
            List<string> list = matchList.Cast<Match>().Select(match => match.Value).ToList();
            return list;
        }
        public static string stringTokenizeToHTML(string stringTokenize)
        {
            stringTokenize = stringTokenize.Replace("<<<", "<span class='__picasso_placeHolder' >");
            stringTokenize = stringTokenize.Replace(">>>", "</span>");
            return stringTokenize;
        }

        public static string clean(string placeHolder)
        {
            placeHolder = placeHolder.Replace("<<<", "");
            placeHolder = placeHolder.Replace(">>>", "");
            return placeHolder;
        }

        public static string removeUnUsableAttributes(string str)
        {
            var matchList = Regex.Matches(str, @"[\S-]+=""""");
            foreach (var item in matchList)
            {
                str = str.Replace(item.ToString(), "");
            }
            return str;
        }

        public static string clearExtraComa(string str)
        {
            return Regex.Replace(str, @"[,]+", ",").TrimEnd(',').TrimStart(',');
        }

        public static string removeUnUsableTokens(string contentResult)
        {
            List<string> placeHolderList = Parser.getPlaceHolderList(contentResult, Constant.pattern);
            foreach (string placeHolder in placeHolderList)
            {
                contentResult = contentResult.Replace(placeHolder, "");
            }
            return contentResult;
        }
    }
}
