import { action, observable } from 'mobx';
import { EntityDto } from 'shared/services/dto/entityDto';
// import { PagedResultDto } from 'shared/services/dto/pagedResultDto';
// import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateOrUpdateJobTypeInput } from '../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';
import { GetAllJobTypeOutput } from '../services/dto/jobTypeDTO/getAllJobTypeOutput';
// import { UpdateJobTypeInput } from '../services/dto/jobTypeDTO/UpdateJobTypeInput';

import jobTypeService from '../services/jobTypeService'

export interface IJobTypeItem {
    name: string,
    displayName: string,
    isStatic: boolean,
    isDefault: boolean,
    creationTime: any,
    id: 0
}

class JobTypeStore {

    @observable jobTypes!: GetAllJobTypeOutput<IJobTypeItem>;
    @action
    async getAllJobType() {
        let result = await jobTypeService.getAll();
        this.jobTypes = result;
        console.log(this.jobTypes);
    }

    @action
    async createJobType(createJobTypeInput: CreateOrUpdateJobTypeInput) {
        let result = await jobTypeService.create(createJobTypeInput);
        this.jobTypes.items.push(result);
    }

    // @action
    // async update(updateUserInput: UpdateJobTypeInput) {
    //     // let result = await userService.update(updateUserInput);
    //     // this.users.items = this.users.items.map((x: GetUserOutput) => {
    //     //     if (x.id === updateUserInput.id) x = result;
    //     //     return x;
    //     // });
    // }

    @action
    async deleteJobType(entityDto: EntityDto) {
        await jobTypeService.delete(entityDto);
        this.jobTypes.items = this.jobTypes.items.filter((x: EntityDto) => x.id !== entityDto.id);
    }

}

export default JobTypeStore;
