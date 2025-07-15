﻿// Copyright (c) 2020-2025 Shenzhen Ganwei Software Technology Co., Ltd
namespace IoTCenterCore.AutoMapper
{
    public interface IObjectMapping
    {
        TDestination Map<TSource, TDestination>(TSource source);
        TDestination Map<TSource, TDestination>(TSource source, TDestination destination);
    }
}
