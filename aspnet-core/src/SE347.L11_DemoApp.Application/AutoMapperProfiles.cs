using AutoMapper;
using SE347.L11_DemoApp.Entities;
using SE347.L11_DemoApp.JobTypes.Dto;
using System;

namespace SE347.L11_DemoApp
{
    public static class AutoMapperProfiles
    {
        public static void Config(IMapperConfigurationExpression config)
        {
            /**
             * Define custom automapper below 
             */
            // JobType
            config.CreateMap<JobType, JobTypeDto>()
                .ForMember(src => src.DaysOld, opt => 
                    opt.MapFrom(dest => DateTime.Now.Subtract(dest.CreationTime).Days));
        }
    }
}
