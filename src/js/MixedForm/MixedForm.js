import React from 'react';

import HeaderSubmitComponent from './HeaderSubmitComponent';
import SingleFormView from './SingleFormView';
import FormItem from './FormItem';

class MixedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOne: [],
      formTwo: [],
      formThree: [],
    };
    this.formViewOneRef = React.createRef();
    this.formViewTwoRef = React.createRef();
    this.formViewThreeRef = React.createRef();
  }

  addItemToFormOne = (inputValue) => {
    const { formOne } = this.state;
    formOne.push(inputValue);
    this.setState({ formOne });
  }

  addItemToFormTwo = (inputValue) => {
    const { formTwo } = this.state;
    formTwo.push(inputValue);
    this.setState({ formTwo });
  }

  addItemToFormThree = (inputValue) => {
    const { formThree } = this.state;
    formThree.push(inputValue);
    this.setState({ formThree });
  }

  // sortFormOne = (isSort) => {
  //   const { formOne } = this.state;
  //   formOne.sort((a, b) => {
  //     if (isSort) {
  //       if (a === b) {
  //         return 0;
  //       } if (a > b) {
  //         return -1;
  //       }
  //       return 1;
  //     }
  //     if (a === b) {
  //       return 0;
  //     } if (a > b) {
  //       return 1;
  //     }
  //     return -1;
  //   });
  //   this.setState({ formOne });
  // }

  removeItemOne = (itemIndex) => {
    const { formOne } = this.state;
    formOne.splice(itemIndex, 1);
    this.setState({ formOne });
  }

  removeItemTwo = (itemIndex) => {
    const { formTwo } = this.state;
    formTwo.splice(itemIndex, 1);
    this.setState({ formTwo });
  }

  removeItemThree = (itemIndex) => {
    const { formThree } = this.state;
    formThree.splice(itemIndex, 1);
    this.setState({ formThree });
  }

  renderFormListElementOne = (isSort) => {
    const { formOne } = this.state;
    let formListElement;

    if (formOne.length === 0) {
      formListElement = (
        <tr>
          <td colSpan="2">There is nothing in form one.</td>
        </tr>
      );
    } else {
      formOne.sort((a, b) => {
        if (isSort) {
          if (a === b) {
            return 0;
          } if (a > b) {
            return -1;
          }
          return 1;
        }
        if (a === b) {
          return 0;
        } if (a > b) {
          return 1;
        }
        return -1;
      });
      formListElement = formOne.map((item, index) => (
        <FormItem
          key={item}
          itemIn={item}
          onRemove={this.removeItemOne}
          index={index}
        />
      ));
    }
    return (
      <tbody>
        {formListElement}
      </tbody>
    );
  }

  renderFormListElementTwo = (isSort) => {
    const { formTwo } = this.state;
    let formListElement;

    if (formTwo.length === 0) {
      formListElement = (
        <tr>
          <td colSpan="2">There is nothing in form Two.</td>
        </tr>
      );
    } else {
      formTwo.sort((a, b) => {
        if (isSort) {
          if (a === b) {
            return 0;
          } if (a > b) {
            return -1;
          }
          return 1;
        }
        if (a === b) {
          return 0;
        } if (a > b) {
          return 1;
        }
        return -1;
      });
      formListElement = formTwo.map((item, index) => (
        <FormItem
          key={item}
          itemIn={item}
          onRemove={this.removeItemTwo}
          index={index}
        />
      ));
    }
    return (
      <tbody>
        {formListElement}
      </tbody>
    );
  }

  renderFormListElementThree = (isSort) => {
    const { formThree } = this.state;
    let formListElement;

    if (formThree.length === 0) {
      formListElement = (
        <tr>
          <td colSpan="2">There is nothing in form Three.</td>
        </tr>
      );
    } else {
      formThree.sort((a, b) => {
        if (isSort) {
          if (a === b) {
            return 0;
          } if (a > b) {
            return -1;
          }
          return 1;
        }
        if (a === b) {
          return 0;
        } if (a > b) {
          return 1;
        }
        return -1;
      });
      formListElement = formThree.map((item, index) => (
        <FormItem
          key={item}
          itemIn={item}
          onRemove={this.removeItemThree}
          index={index}
        />
      ));
    }
    return (
      <tbody>
        {formListElement}
      </tbody>
    );
  }
  // renderFormListElementThree = () => {
  //   const { formThree } = this.state;
  //   let formListElement;
  //   if (formThree.length === 0) {
  //     formListElement = (
  //       <tr>
  //         <td colSpan="2">There is nothing in form Three.</td>
  //       </tr>
  //     );
  //   } else {
  //     formListElement = formThree.map((item, index) => (
  //       <FormItem
  //         key={item}
  //         itemIn={item}
  //         onRemove={this.removeItemThree}
  //         index={index}
  //       />
  //     ));
  //   }
  //   return (
  //     <tbody>
  //       {formListElement}
  //     </tbody>
  //   );
  // }

  sortReverseAll = () => {
    if (this.formViewOneRef.current !== null) {
      this.formViewOneRef.current.sortFormReverse();
    }
    if (this.formViewTwoRef.current !== null) {
      this.formViewTwoRef.current.sortFormReverse();
    }
    if (this.formViewThreeRef.current !== null) {
      this.formViewThreeRef.current.sortFormReverse();
    }
  }

  submitForm = () => {
    this.setState({ formOne: [], formTwo: [], formThree: [] });
    // const { formOne, formTwo, formThree } = this.state;
    // const mixForm = { formOne, formTwo, formThree };
    // this.$http.post(apiPath, { data: mixForm }).then((response) => {
    //   if (response.data.success) {
    //     this.setState({ formOne: [], formTwo: [], formThree: [] });
    //   }
    // });
  }

  render() {
    return (
      <div>
        <HeaderSubmitComponent
          onFormSubmit={this.submitForm}
          title="Mixed Form"
          onSortReverseAll={this.sortReverseAll}
        />
        <SingleFormView
          formTitle="Form One"
          onAddItem={this.addItemToFormOne}
          ref={this.formViewOneRef}
        >
          {this.renderFormListElementOne}
        </SingleFormView>
        <SingleFormView
          formTitle="Form Two"
          onAddItem={this.addItemToFormTwo}
          ref={this.formViewTwoRef}
        >
          {this.renderFormListElementTwo}
        </SingleFormView>
        <SingleFormView
          formTitle="Form Three"
          onAddItem={this.addItemToFormThree}
          ref={this.formViewThreeRef}
        >
          {this.renderFormListElementThree}
        </SingleFormView>
      </div>
    );
  }
}

export default MixedForm;
