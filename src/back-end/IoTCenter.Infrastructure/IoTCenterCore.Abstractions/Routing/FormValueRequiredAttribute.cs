// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
namespace IoTCenterCore.Routing
{
    public class FormValueRequiredAttribute : System.Attribute
    {
        public FormValueRequiredAttribute(string formKey)
        {
            FormKey = formKey;
        }

        public string FormKey { get; }
    }
}
