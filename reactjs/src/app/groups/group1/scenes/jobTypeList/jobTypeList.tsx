// import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { ClickAwayListener } from '@material-ui/core'
import { jobTypeDTO } from '../../dto/jobTypeDTO'
// import { jobTypeItem } from '../../components/jobTypeItem/jobTypeItem'

// import AppLayout from 'components/Layout/AppLayout'
// import ManagementLayout from 'components/Layout/ManagementLayout'

//AppLayout: Page without header and Footer
//AppLayout: Page with 100% width Header


interface IListJobTypeProps {
    list_JobType: Array<jobTypeDTO>;
}

interface IListJobTypeState {
    //for logic popup
    isAddDocCategoryPopupOpen: Boolean;
    isEditDocCategoryPopupOpen: Boolean;
    isVerifyDeleteDocCategoryPopupOpen: Boolean;

    //for content of popup
    isNotifySuccessOpen: Boolean;
    isNotifyFailOpen: Boolean;
}

//component for page
export default class jobTypeList extends React.Component<IListJobTypeProps, IListJobTypeState> {

    constructor({ list_JobType }: IListJobTypeProps) {
        super({ list_JobType });
        this.state = {
            isAddDocCategoryPopupOpen: false,
            isEditDocCategoryPopupOpen: false,
            isVerifyDeleteDocCategoryPopupOpen: false,
            isNotifyFailOpen: false,
            isNotifySuccessOpen: false
        }
    }

    componentDidmount() {
        //call API for get list
    }

    closeAllDocCategoryListItemActivated = () => {
        console.log("A");
    }

    render() {


        console.log(this.props.list_JobType);

        return (
            <div>
                <div className="Category_Dropdown_Title">
                    {/* implement multi-language later */}
                    Danh sách danh mục:
              </div>
                <ClickAwayListener onClickAway={() => { this.closeAllDocCategoryListItemActivated() }}>
                    <div className="Category_Dropdown_Container  margin_top_5px" id="management-doc-categories-container">
                        <div className="Custom_Table_Layout">
                            <div className="Custom_Table_Header">
                                <div className="Custom_Table-20percents_Header">Mã danh mục</div>
                                <div className="Custom_Table_80percents_Header">Tên danh mục</div>
                            </div>
                            <div className="Custom_Table_Layout" >
                                {/* {list_JobType.map(item =>
                                    <jobTypeItem jobTypeDTO={item} ></jobTypeItem>
                                )} */}
                            </div>
                        </div>

                        <div className="Category_Buttons_Layout" >
                            <div className="Simple_Blue_Button margin_right_5px">Thêm</div>
                            <div className="Simple_White_Button margin_right_5px">Sửa</div>
                            <div className="Simple_Red_Button">Xóa</div>
                        </div>
                    </div>
                </ClickAwayListener>
            </div>
        );
    }

}
