using Abp.Application.Services.Dto;

namespace SE347.L11_DemoApp.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

