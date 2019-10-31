namespace Picasso2.BLL.BIZ
{
    public static class BLL
    {
        private static BLPage blPage = new BLPage();
        private static BLCustomComponent bLCustomComponent = new BLCustomComponent();
        private static BLGenericType blGenericType = new BLGenericType();
        private static BLProject blProject = new BLProject();
        private static BLUser blUser = new BLUser();
        private static BLComponent blComponent = new BLComponent();
        private static BLContainerType blContainerType = new BLContainerType();
        private static BLTemplateType blTemplateType = new BLTemplateType();
        private static BLInheritedToken blInheritedToken = new BLInheritedToken();
        private static BLInheritedType bLInheritedType = new BLInheritedType();
        private static BLLayout blLayout = new BLLayout();
        private static BLContent blContent = new BLContent();
        private static BLGenerator bLGenerator = new BLGenerator();
        private static BLPageContent bLPageContent = new BLPageContent();
        private static BLWebDefiner bLWebDefiner = new BLWebDefiner();
        private static BLDesign blDesign = new BLDesign();
        private static BLLogin bLLogin = new BLLogin();
        private static BLDashboard bLDashboard = new BLDashboard();
        private static BLTable bLTable = new BLTable();

        public static BLPage BLPage { get { return blPage; } }

        public static BLTable BLTable { get { return bLTable; } }
        public static BLGenericType BLGenericType { get { return blGenericType; } }
        public static BLProject BLProject { get { return blProject; } }
        public static BLUser BLUser { get { return blUser; } }
        public static BLComponent BLComponent { get { return blComponent; } }
        public static BLContainerType BLContainerType { get { return blContainerType; } }
        public static BLTemplateType BLTemplateType { get { return blTemplateType; } }
        public static BLInheritedToken BLInheritedToken { get { return blInheritedToken; } }
        public static BLInheritedType BLInheritedType { get { return bLInheritedType; } }
        public static BLLayout BLLayout { get { return blLayout; } }
        public static BLContent BLContent { get { return blContent; } }
        public static BLGenerator BLGenerator { get { return bLGenerator; } }
        public static BLPageContent BLPageContent { get { return bLPageContent; } }
        public static BLWebDefiner BLWebDefiner { get { return bLWebDefiner; } }
        public static BLDesign BLDesign { get { return blDesign; } }
        public static BLCustomComponent BLCustomComponent { get { return bLCustomComponent; } }
        public static BLLogin BLLogin { get { return bLLogin; } }
        public static BLDashboard BLDashboard { get { return bLDashboard; } }


    }
}
