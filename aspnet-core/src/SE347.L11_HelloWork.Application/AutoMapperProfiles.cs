using AutoMapper;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork.JobTypes.Dto;
using System;

namespace SE347.L11_HelloWork
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
