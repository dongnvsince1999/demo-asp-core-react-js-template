import React from 'react'
import { jobTypeDTO } from '../../dto/jobTypeDTO'
// import { ClickAwayListener } from '@material-ui/core';
// import CustomModal from 'app/shared/components/Modal/CustomModal'

interface IJobTypeItemProps {
    jobTypeDTO: jobTypeDTO;
}

interface IJobTypeItemState {
    //for logic popup
    isAddDocCategoryPopupOpen: Boolean;
    isEditDocCategoryPopupOpen: Boolean;
    isVerifyDeleteDocCategoryPopupOpen: Boolean;

    //for content of popup
    isNotifySuccessOpen: Boolean;
    isNotifyFailOpen: Boolean;
}

//component for page
class jobTypeItem extends React.Component<IJobTypeItemProps, IJobTypeItemState> {

    constructor({ jobTypeDTO }: IJobTypeItemProps) {
        super({ jobTypeDTO });
        this.state = {
            isAddDocCategoryPopupOpen: false,
            isEditDocCategoryPopupOpen: false,
            isVerifyDeleteDocCategoryPopupOpen: false,
            isNotifyFailOpen: false,
            isNotifySuccessOpen: false
        }
    }

    componentDidmount() {

    }

    closeAllDocCategoryListItemActivated = () => {
        console.log("A");
    }

    handerDocCategoryItemClick = (e: any, jobTypeCODE: String, jobTypeNAME: String) => {

    }

    render() {

        let { jobTypeDTO } = this.props;
        console.log(jobTypeDTO);

        return (
            <div className="jobtype-item" id={'job-type-item-' + jobTypeDTO.jobTypeCODE} onClick={(e) => this.handerDocCategoryItemClick(e, jobTypeDTO.jobTypeCODE, jobTypeDTO.jobTypeNAME)}>
                <div className="jobtype-item-20percents">{jobTypeDTO.jobTypeCODE}</div>
                <div className="jobtype-item-40percents">{jobTypeDTO.jobTypeNAME}</div>
                <div className="jobtype-item-40percents">{jobTypeDTO.jobTypeDESC}</div>
            </div>
        );
    }

}

export default jobTypeItem;
