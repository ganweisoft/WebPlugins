using AutoMapper;

namespace IoTCenterCore.AutoMapper
{
    public interface IAutoMapperConfig
    {
        void Config(IMapperConfigurationExpression expression);
    }
}
