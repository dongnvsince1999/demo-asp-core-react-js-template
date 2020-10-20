import React from 'react'

import '../../styles.less'
import './JobTypeList.less'
import { inject, observer } from 'mobx-react';
import { ClickAwayListener } from '@material-ui/core'
import CustomModal from 'app/shared/components/CustomModal/CustomModal'
import AppComponentBase from 'app/shared/components/AppComponentBase';
import Stores from 'app/shared/stores/storeIdentifier';
import JobTypeStore from '../../stores/jobTypeStore';
import { EntityDto } from 'shared/services/dto/entityDto';
import { CreateOrUpdateJobTypeInput } from '../../services/dto/jobTypeDTO/createOrUpdateJobTypeInput';

export interface IJobTypeListProps {
    jobTypeStore: JobTypeStore;
}

export interface IJobTypeListState {
    modalVisible: boolean;
    selectedID: string;
    isAnyItemClicked: boolean;
    isAddJobTypePopupOpen: boolean;
    jobTypeName: string,
    jobTypeDesc: string
}


@inject(Stores.jobTypeStore)
@observer
export default class JobTypeList extends AppComponentBase<IJobTypeListProps, IJobTypeListState> {



    constructor(props: any) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedID: '',
            isAnyItemClicked: false,
            isAddJobTypePopupOpen: false,
            jobTypeName: "",
            jobTypeDesc: ""
        }

    }

    async componentDidMount() {
        await this.getAll();
    }

    Modal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible,
        });
    };

    async getAll() {
        await this.props.jobTypeStore.getAllJobType();
    }

    handleCreate = () => {

        this.setState({ isAddJobTypePopupOpen: true })
        // this.props.jobTypeStore.createJobType(input);
        this.getAll();

    };

    async createOrUpdateModalOpen(entityDto: EntityDto) {
        // await this.props.jobTypeStore.deleteJobType(entityDto);
        this.Modal();
    }

    handleDelete = () => {

    }

    closeAllSelectedItem = () => {

    }

    handleEdit = () => {

    }

    handleItemClicked = (id: string) => {
        let all_item = document.getElementsByClassName("custom-table-line-activated");

        for (let i = 0; i < all_item.length; i++) {
            all_item[i].className = "custom-table-line";
        }

        let selected_item: any = document.getElementById("job-type-list-item-" + id);
        selected_item.className = "custom-table-line-activated";

        this.setState({
            isAnyItemClicked: true, selectedID: id
        });

    }

    public render() {
        const { jobTypes } = this.props.jobTypeStore;
        if (jobTypes === undefined) return (<div></div >)

        let list: any[];
        list = jobTypes.items

        return (
            <div style={{ margin: "auto", marginTop: "20px", width: "60%" }}>

                <div className="custom-table-layout" style={{ paddingBottom: "10px" }}>
                    <div className="custom-table-header">
                        <div className="custom-table-20percents-header">Mã</div>
                        <div className="custom-table-40percents-header">Tên</div>
                        <div className="custom-table-40percents-header">Mô tả</div>
                    </div>
                    <div>
                        {list.map(
                            item =>
                                <ClickAwayListener onClickAway={() => { this.closeAllSelectedItem() }}>
                                    <div className="custom-table-line" key={item.id} style={{ display: "flex" }} id={'job-type-list-item-' + item.id} onClick={() => this.handleItemClicked(item.id)}>
                                        <div className="custom-table-item-20percents">{item.id}</div>
                                        <div className="custom-table-item-40percents">{item.name}</div>
                                        <div className="custom-table-item-40percents">{item.description}</div>
                                    </div>
                                </ClickAwayListener>
                        )}
                    </div>
                </div>

                <div className="Buttons_Layout"  >
                    {this.isGranted('Pages.JobType.Create') && <div className="Simple_Blue_Button margin_right_5px" onClick={() => this.handleCreate()}>Thêm</div>}
                    {this.isGranted('Pages.JobType.Update') && <div className="Simple_White_Button margin_right_5px" onClick={() => this.handleEdit()}>Sửa</div>}
                    {this.isGranted('Pages.JobType.Delete') && <div className="Simple_Red_Button" onClick={() => this.handleDelete()}>Xóa</div>}
                </div>

                <CustomModal
                    shadow={true}
                    type="custom"
                    title="Thêm loại công việc"
                    open={this.state.isAddJobTypePopupOpen}
                    closeModal={() => { this.setState({ isAddJobTypePopupOpen: false }); }}
                >
                    <div className="Custom_Modal_Body">
                        <div>
                            <div className="Simple_Gray_Label"> Tên loại công việc mới: </div>
                            <input type="text" className="Simple_Text_Input" onChange={(e) => this.setState({ jobTypeName: e.target.value })} placeholder="Nhập tên loại công việc ..." />
                            <div className="Simple_Gray_Label"> Mô tả: </div>
                            <input type="text" className="Simple_Text_Input" onChange={(e) => this.setState({ jobTypeDesc: e.target.value })} placeholder="Nhập mô tả ..." />
                        </div>
                    </div>

                    <div className="Custom_Modal_Footer">
                        <div className="Simple_Gray_Label">Xác nhận?</div>
                        <div style={{ display: "flex" }}>
                            <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerAddJobTypeConfirmation()}>OK</button>
                            <button className="Simple_White_Button" onClick={() => { this.setState({ isAddJobTypePopupOpen: false }) }}>Cancel</button>
                        </div>
                    </div>
                </CustomModal>

                {/* <CustomModal
                    shadow={true}
                    type="custom"
                    title="Cập nhật danh mục bài viết"
                    open={this.isEditPostCategoryPopupOpen}
                    closeModal={() => { this.isEditPostCategoryPopupOpen = false; this.setState({}); }}
                >
                    <div className="Custom_Modal_Body">
                        <div className="Simple_Gray_Label"> Tên danh mục: </div>
                        <input type="text" className="Simple_Text_Input" defaultValue={this.selected_category_name} />
                    </div>

                    <div className="Custom_Modal_Footer">
                        <div className="Simple_Gray_Label">Xác nhận?</div>
                        <div style={{ display: "flex" }}>
                            <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyEditPostCategoryConfirmation()}>OK</button>
                            <button className="Simple_White_Button" onClick={() => { this.isEditPostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                        </div>
                    </div>
                </CustomModal> */}

                {/* Popup for verifying delete post category */}
                {/* <CustomModal
                    shadow={true}
                    type="confirmation"
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    open={this.isVerifyDeletePostCategoryPopupOpen}
                    closeModal={() => { this.isVerifyDeletePostCategoryPopupOpen = false; this.setState({}); }}
                >
                    <button className="Simple_Blue_Button margin_right_5px" onClick={() => this.handlerVerifyDeletePostCategoryConfirmation()}>OK</button>
                    <button className="Simple_White_Button" onClick={() => { this.isVerifyDeletePostCategoryPopupOpen = false; this.setState({}) }}>Cancel</button>
                </CustomModal> */}

                {/* Custom for notifing success */}
                {/* <CustomModal
                    open={this.isNotifySuccessOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_success"
                    closeModal={() => { this.isNotifySuccessOpen = false; this.setState({}) }}
                >
                </CustomModal> */}

                {/* Custom for notifing fail */}
                {/* <CustomModal
                    open={this.isNotifyFailOpen}
                    shadow={true}
                    title={this.notifyHeader}
                    text={this.notifyContent}
                    type="alert_fail"
                    closeModal={() => { this.isNotifyFailOpen = false; this.setState({}) }}
                >
                </CustomModal> */}
            </div >
        );


    }

    handlerAddJobTypeConfirmation = () => {
        (document.getElementById('add-job-type-name-text-input'))
        let dto: CreateOrUpdateJobTypeInput =
        {
            name: this.state.jobTypeName,
            displayName: this.state.jobTypeName,
            normalizedName: this.state.jobTypeName,
            description: this.state.jobTypeDesc,
            grantedPermissions: [
                ""
            ]
        }
        this.props.jobTypeStore.createJobType(dto);
        this.setState({ isAddJobTypePopupOpen: false });
    }
}