import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ChannelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="blockedBy"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="participant"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Total File Count"
          source="totalFileCount"
        />
        <NumberInput
          step={1}
          label="Total Image Count"
          source="totalImageCount"
        />
        <NumberInput
          step={1}
          label="Total Link Count"
          source="totalLinkCount"
        />
        <NumberInput
          step={1}
          label="Total Message Count"
          source="totalMessageCount"
        />
      </SimpleForm>
    </Edit>
  );
};
