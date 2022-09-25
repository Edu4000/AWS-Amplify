/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getModifications = /* GraphQL */ `
  query GetModifications($id: ID!) {
    getModifications(id: $id) {
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
export const listModifications = /* GraphQL */ `
  query ListModifications(
    $filter: ModelModificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLicence = /* GraphQL */ `
  query GetLicence($id: ID!) {
    getLicence(id: $id) {
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
export const listLicences = /* GraphQL */ `
  query ListLicences(
    $filter: ModelLicenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReservations = /* GraphQL */ `
  query GetReservations($id: ID!) {
    getReservations(id: $id) {
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
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
