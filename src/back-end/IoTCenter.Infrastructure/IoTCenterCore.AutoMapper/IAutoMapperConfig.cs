// Copyright (c) 2020 Shenzhen Ganwei Software Technology Co., Ltd
using AutoMapper;

namespace IoTCenterCore.AutoMapper
{
    public interface IAutoMapperConfig
    {
        void Config(IMapperConfigurationExpression expression);
    }
}
