/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      surname
      email
      active
      admin
      general_admin
      verified
      sign_up_date
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      surname
      email
      active
      admin
      general_admin
      verified
      sign_up_date
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      surname
      email
      active
      admin
      general_admin
      verified
      sign_up_date
      createdAt
      updatedAt
    }
  }
`;
export const createModifications = /* GraphQL */ `
  mutation CreateModifications(
    $input: CreateModificationsInput!
    $condition: ModelModificationsConditionInput
  ) {
    createModifications(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      type
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateModifications = /* GraphQL */ `
  mutation UpdateModifications(
    $input: UpdateModificationsInput!
    $condition: ModelModificationsConditionInput
  ) {
    updateModifications(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      type
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteModifications = /* GraphQL */ `
  mutation DeleteModifications(
    $input: DeleteModificationsInput!
    $condition: ModelModificationsConditionInput
  ) {
    deleteModifications(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      type
      date
      createdAt
      updatedAt
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      name
      portable
      os
      storage
      ram
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      name
      portable
      os
      storage
      ram
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      name
      portable
      os
      storage
      ram
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const createLicence = /* GraphQL */ `
  mutation CreateLicence(
    $input: CreateLicenceInput!
    $condition: ModelLicenceConditionInput
  ) {
    createLicence(input: $input, condition: $condition) {
      id
      name
      year
      compatibility
      category
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const updateLicence = /* GraphQL */ `
  mutation UpdateLicence(
    $input: UpdateLicenceInput!
    $condition: ModelLicenceConditionInput
  ) {
    updateLicence(input: $input, condition: $condition) {
      id
      name
      year
      compatibility
      category
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const deleteLicence = /* GraphQL */ `
  mutation DeleteLicence(
    $input: DeleteLicenceInput!
    $condition: ModelLicenceConditionInput
  ) {
    deleteLicence(input: $input, condition: $condition) {
      id
      name
      year
      compatibility
      category
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      building
      proyector
      wifi
      board
      air_conditioner
      ethernet
      computers
      double_monitor
      seats
      energy_outlets
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      building
      proyector
      wifi
      board
      air_conditioner
      ethernet
      computers
      double_monitor
      seats
      energy_outlets
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      building
      proyector
      wifi
      board
      air_conditioner
      ethernet
      computers
      double_monitor
      seats
      energy_outlets
      description
      images
      createdAt
      updatedAt
    }
  }
`;
export const createReservations = /* GraphQL */ `
  mutation CreateReservations(
    $input: CreateReservationsInput!
    $condition: ModelReservationsConditionInput
  ) {
    createReservations(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      device {
        id
        name
        portable
        os
        storage
        ram
        description
        images
        createdAt
        updatedAt
      }
      licence {
        id
        name
        year
        compatibility
        category
        description
        images
        createdAt
        updatedAt
      }
      room {
        id
        name
        building
        proyector
        wifi
        board
        air_conditioner
        ethernet
        computers
        double_monitor
        seats
        energy_outlets
        description
        images
        createdAt
        updatedAt
      }
      reserved_in
      start
      end
      used
      canceled
      createdAt
      updatedAt
    }
  }
`;
export const updateReservations = /* GraphQL */ `
  mutation UpdateReservations(
    $input: UpdateReservationsInput!
    $condition: ModelReservationsConditionInput
  ) {
    updateReservations(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      device {
        id
        name
        portable
        os
        storage
        ram
        description
        images
        createdAt
        updatedAt
      }
      licence {
        id
        name
        year
        compatibility
        category
        description
        images
        createdAt
        updatedAt
      }
      room {
        id
        name
        building
        proyector
        wifi
        board
        air_conditioner
        ethernet
        computers
        double_monitor
        seats
        energy_outlets
        description
        images
        createdAt
        updatedAt
      }
      reserved_in
      start
      end
      used
      canceled
      createdAt
      updatedAt
    }
  }
`;
export const deleteReservations = /* GraphQL */ `
  mutation DeleteReservations(
    $input: DeleteReservationsInput!
    $condition: ModelReservationsConditionInput
  ) {
    deleteReservations(input: $input, condition: $condition) {
      id
      user {
        id
        name
        surname
        email
        active
        admin
        general_admin
        verified
        sign_up_date
        createdAt
        updatedAt
      }
      device {
        id
        name
        portable
        os
        storage
        ram
        description
        images
        createdAt
        updatedAt
      }
      licence {
        id
        name
        year
        compatibility
        category
        description
        images
        createdAt
        updatedAt
      }
      room {
        id
        name
        building
        proyector
        wifi
        board
        air_conditioner
        ethernet
        computers
        double_monitor
        seats
        energy_outlets
        description
        images
        createdAt
        updatedAt
      }
      reserved_in
      start
      end
      used
      canceled
      createdAt
      updatedAt
    }
  }
`;
